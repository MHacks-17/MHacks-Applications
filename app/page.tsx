import { ProfileForm } from "@/app/form"
import { ModeToggle } from '@/components/ui/mode-toggle';


export default function Page() {
  return (
    <div className="min-h-screen py-2 flex flex-col">
      <div className="flex justify-end p-4 mr-2">
        <ModeToggle />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <ProfileForm />
      </div>
    </div>
  )
}
