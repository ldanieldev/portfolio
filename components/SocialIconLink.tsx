import { DaisyUiColors } from '@/types'
import { Tailwindest } from 'Tailwindest'
import Link from 'next/link'
import { IconType } from 'react-icons'

type props = {
  url: string
  Icon: IconType
  tooltip: string
  tooltipPosition?: 'bottom' | 'left' | 'right' | 'top'
  iconSize: number
  iconColor?: Tailwindest['color'] | DaisyUiColors
  iconHoverColor?: Tailwindest['color'] | DaisyUiColors
}

export default function SocialIconLink({
  url,
  Icon,
  iconSize,
  tooltip,
  tooltipPosition = 'top',
  iconColor,
  iconHoverColor = 'text-secondary',
}: props) {
  return (
    <Link href={url} target="_blank" title={tooltip}>
      <div
        className={`tooltip tooltip-primary font-bold tooltip-${tooltipPosition}`}
        data-tip={tooltip}
      >
        <Icon
          className={`${iconColor} hover:${iconHoverColor}`}
          size={iconSize}
        />
      </div>
    </Link>
  )
}
