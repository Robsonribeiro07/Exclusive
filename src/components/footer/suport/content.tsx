import { Label } from '../labe'
import { Title } from '../title'

export function ContentSuport() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Title title="Support" />

      <div className="flex flex-col gap-4 items-start">
        <Label
          label="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."
          width="200"
        />
        <Label label="exclusive@gmail.com" />
        <Label label="+88015-88888-9999" />
      </div>
    </div>
  )
}
