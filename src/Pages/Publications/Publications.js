import React, { useMemo } from "react";
import { Layout, theme } from "antd";
import PublicationsItem from "./PublicationsItem/PublicationsItem";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import PublicationSider from "../../Components/PublicationSider";
import LoadingSkeleton from "../../Components/LoadingSkeleton";

const { Content, Sider } = Layout;

const Publication = () => {
  const {
    data: thesisFilesData = [],
    isLoading,
  } = useQuery({
    queryKey: ["thesisFiles"],
    queryFn: async () => {
      const res = await fetch(
        `https://csedut-hesis-repository-server.vercel.app/thesisFiles`
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const memoizedThesisFilesData = useMemo(() => thesisFilesData, [thesisFilesData]);

  if (isLoading) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }

  return (
    <Layout>
      <Sider
        style={{ background: "#fff" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div>
          <PublicationSider />
        </div>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
              <div className="grid grid-cols-6">
                <div className="col-span-6">
                  {memoizedThesisFilesData.map((option) => (
                    <PublicationsItem
                      key={option._id}
                      option={option}
                    ></PublicationsItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Publication;
