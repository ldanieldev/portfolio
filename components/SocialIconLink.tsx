import Link from 'next/link'
import { IconType } from 'react-icons'

type props = {
  url: string
  Icon: IconType
  tooltip: string
  tooltipPosition?: `tooltip-${'bottom' | 'left' | 'right' | 'top'}`
  tooltipTextTwCls?: string
  iconSize: number
  iconColorTwCls?: string
  iconHoverColorTwCls?: `hover:${string}`
}

export default function SocialIconLink({
  url,
  Icon,
  iconSize,
  tooltip,
  tooltipPosition = 'tooltip-top',
  tooltipTextTwCls,
  iconColorTwCls,
  iconHoverColorTwCls = 'hover:text-secondary',
}: props) {
  return (
    <Link href={url} target="_blank" title={tooltip}>
      <div
        className={`tooltip tooltip-primary font-bold ${tooltipPosition} ${tooltipTextTwCls ?? ''}`}
        data-tip={tooltip}
      >
        <Icon
          className={`${iconColorTwCls} ${iconHoverColorTwCls}`}
          size={iconSize}
        />
      </div>
    </Link>
  )
}
