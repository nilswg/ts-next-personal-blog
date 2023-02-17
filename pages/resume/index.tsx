import Resume from '@/components/Resume'
import { download } from '@/lib/fileSaver'
import { useToastsStore } from '@/stores/toasts'
import { NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { ReactNode, useCallback } from 'react'
import { BiDownload } from 'react-icons/bi'

const DownloadResumeButton = () => {
  const { locale } = useRouter()
  const addToast = useToastsStore((s) => s.addToast)

  const { t } = useTranslation('common')
  const onClick = useCallback(async () => {
    const password = prompt(t('enter_password') + '?')
    if (!password) return

    const data = await fetch(
      `/api/resume/download?locale=${locale}&password=${password}`
    ).then((resp) => {
      if (resp.status === 200) {
        resp.blob().then((blob) => download(blob, 'resume.pdf'))
      } else {
        return resp.json()
      }
    })

    if (data?.errors) {
      addToast({
        type: 'warn',
        text: t(`errorDict.${data.errors}`),
      })
    }
  }, [addToast, t])

  return (
    <a
      onClick={onClick}
      className="absolute top-2 left-4 z-[100] mb-[1.5rem] inline-block rounded-full px-4 py-4 font-medium shadow-lg duration-300 hover:bg-[#403A3A] hover:text-[#FAFAFA]"
    >
      <BiDownload />
    </a>
  )
}

const ResumeEditorContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-[5rem] w-full">
      <div className="relative mx-auto min-h-[1122px] max-w-[830px] overflow-hidden bg-[#FCFCFC] shadow-[0_-1px_4px_rgba(0,0,0,.1)]">
        <DownloadResumeButton />
        <div className="flex w-full justify-center">{children}</div>
      </div>
    </div>
  )
}

const ResumePage = () => {
  return (
    <ResumeEditorContainer>
      <Resume />
    </ResumeEditorContainer>
  )
}

export default ResumePage

export async function getStaticProps(ctx: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        'home',
        'common',
        'resume',
      ])),
    },
    revalidate: false
  }
}
