import Logo from "../../../app/components/Logo";
import NavBar from "../../../app/components/Navbar";
import { SessionController } from "../../../app/components/SessionController";
import confirm from "../../../utils/confirm";
import * as DL from "./DefaultLayout.styles";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent> {children} </DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            title="Clarissa Xavier"
            description="programadora há 3 anos"
            onLogout={() =>
              confirm({
                title: "Certeza que quer sair?",
                onConfirm: () => window.alert("SIM"),
                onCancel: () => window.alert("NAO"),
              })
            }
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}
