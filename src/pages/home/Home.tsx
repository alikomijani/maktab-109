import { Checkbox } from "@mui/material";
import { useState } from "react";
import MacDonaldSlider from "../../components/MacDonaldSlider/MacDonaldSlider";
import LoadingButton from "../../components/LoadinButton/LoadingButton";

function Home() {
  const [isCash, setIsCash] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <div>
      به پنل مدیریت مکتب شریف خوش آمدید!
      <Checkbox
        name="isCash"
        checked={isCash}
        value={"isCash"}
        onChange={(e) => setIsCash(e.target.checked)}
      />
      <MacDonaldSlider color="secondary" disabled={!isCash} />
      <LoadingButton onClick={handleSave} isLoading={isLoading}>
        Save
      </LoadingButton>
    </div>
  );
}

export default Home;
