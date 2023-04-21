import { CgSpinner } from 'react-icons/cg'

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 128px)' }}
    >
      <CgSpinner
        className="animate-spin fill-secondary inline text-secondary"
        size={96}
      />
      <span className="italic font-bold text-3xl text-primary animate-pulse">
        Loading...
      </span>
    </div>
  )
}
