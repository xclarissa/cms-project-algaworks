import { useNavigate } from "react-router-dom";
import Logo from "../../../app/components/Logo";
import NavBar from "../../../app/components/Navbar";
import { SessionController } from "../../../app/components/SessionController";
import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import * as DL from "./DefaultLayout.styles";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const navigate = useNavigate();

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
                onConfirm: () => {
                  info({
                    title: "Você foi deslogado",
                    description: "Estamos direcionando você para página de login",
                  });
                  // navigate('/login')
                },
                onCancel: () => window.alert("NAO"),
              })
            }
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}
