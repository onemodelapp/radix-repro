import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

export default function Test() {
  return (
    <div className="Test">
      <AlertDialog>
        <AlertDialogTrigger asChild={true}>
          <button>test</button>
        </AlertDialogTrigger>
      </AlertDialog>
    </div>
  );
}
