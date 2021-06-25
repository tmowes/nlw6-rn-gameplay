import { MemberProps } from '../../components/MemberItem/types'

export type GuildWidgetProps = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
}
