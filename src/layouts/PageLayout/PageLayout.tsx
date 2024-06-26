import { PageLayoutProps } from './types'

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="w-full max-w-5xl mx-auto py-8">{children}</div>
}

export default PageLayout
