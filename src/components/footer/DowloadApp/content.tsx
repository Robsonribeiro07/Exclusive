import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Title } from '../title'
import { AppStore, PlayStore, QRcode } from '../../../../public/footer/index'

export function ContentDowloadApp() {
  return (
    <div className="h-[10.125rem]">
      <Title title="Dowload App" />

      <p className="text-xs font-medium text-textColor my-3 opacity-50">
        Save $3 with App New User Only
      </p>

      <div className="grid grid-cols-2 ">
        <QRcode />

        <div className="grid grid-rows-2 gap-3">
          <AppStore />
          <PlayStore />
        </div>
      </div>

      <div className="flex justify-between text-textColor mt-10">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  )
}
