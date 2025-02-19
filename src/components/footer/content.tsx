import { ContentAccountFooter } from './account/content'
import { ContentDowloadApp } from './DowloadApp/content'
import { ContentExclusive } from './Exclusive/content'
import { ContentQuickLink } from './QuickLink/content'
import { ContentSuport } from './suport/content'

export function ContentFooter() {
  return (
    <div className="flex w-full max-w-[1170px] mx-auto flex-col ">
      <div className=" items-start justify-between flex w-full">
        <ContentExclusive />
        <ContentSuport />
        <ContentAccountFooter />
        <ContentQuickLink />
        <ContentDowloadApp />
      </div>

      <p className="text-[1rem] font-regular text-textColor opacity-30   absolute bottom-2 translate-x-[-50%] left-[50%] border-t  w-full flex items-center justify-center py-3">
        &copy; Copyright {new Date().getFullYear()}. All right resever
      </p>
    </div>
  )
}
