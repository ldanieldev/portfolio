import { IconType } from 'react-icons/lib'

export default function LinkListItem(props: {
  url: string
  linkText: string
  icon: IconType
}) {
  return (
    <li className="pl-4 leading-loose flex-grow">
      <props.icon className="inline mr-2 text-secondary mb-1" />
      <a className="text-lg" href={props.url} target="_blank">
        {props.linkText}
      </a>
    </li>
  )
}
