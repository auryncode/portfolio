import RootLayout from "@/layouts/RootLayout";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Terminal } from "lucide-react";

function App() {
  return (
    <RootLayout>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </RootLayout>
  );
}

export default App;
