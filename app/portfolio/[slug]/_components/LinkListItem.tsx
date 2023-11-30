import { IconType } from 'react-icons/lib'

type props = {
  url: string
  linkText: string
  Icon: IconType
}

export default function LinkListItem({ url, linkText, Icon }: props) {
  return (
    <li className="pl-4 leading-loose flex-grow ">
      <Icon className="inline mr-2 text-secondary mb-1" />
      <a
        className="text-lg text-secondary hover:underline"
        href={url}
        target="_blank"
      >
        {linkText}
      </a>
    </li>
  )
}
