import { useState } from "react";
  { emoji: "🍾", name: "Espumante" },
import { Background } from "./components/invitation/Background";
import { EnvelopeScene } from "./components/invitation/EnvelopeScene";
import { InvitationCard } from "./components/invitation/InvitationCard";
import { gifts } from "./components/invitation/constants";

export default function Invitation() {
  const [opened, setOpened] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [letterRising, setLetterRising] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [sceneHidden, setSceneHidden] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setFlapOpen(true);
    setTimeout(() => setLetterRising(true), 600);
    setTimeout(() => setSceneHidden(true), 1400);
    setTimeout(() => setCardVisible(true), 1600);
  };

  const handleClose = () => {
    setCardVisible(false);
    setTimeout(() => {
      setSceneHidden(false);
      setLetterRising(false);
      setTimeout(() => {
        setFlapOpen(false);
        setOpened(false);
      }, 400);
    }, 500);
  };

  return (
    <main className="scrollbar">
      <Background />

      <EnvelopeScene
        sceneHidden={sceneHidden}
        letterRising={letterRising}
        flapOpen={flapOpen}
        onOpen={handleOpen}
      />

      <InvitationCard cardVisible={cardVisible} gifts={gifts} onClose={handleClose} />
    </main>
  );
}
