import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useStateModelRemovingItems } from '@/stores/signup/cart/use-state-modal-removing-itens'

export function AlertRemovingItens() {
  const { open, toogle, close } = useStateModelRemovingItems()
  return (
    <Dialog open={open} onOpenChange={toogle}>
      <DialogContent className="w-[20rem] select-none">
        <DialogHeader>
          <DialogTitle>Deseja remove este item?</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap w-full justify-between">
          <Button onClick={() => close()}>Cancelar</Button>
          <Button className="bg-black hover:bg-buttonRed">Remover</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
