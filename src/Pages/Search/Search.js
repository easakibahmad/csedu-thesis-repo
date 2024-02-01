import React, { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import PublicationsItem from "../Publications/PublicationsItem/PublicationsItem";
import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import PublicationSider from "../../Components/PublicationSider";
import { Content } from "antd/es/layout/layout";

const Search = () => {
  const data = useLoaderData();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const memoizedThesisFilesData = useMemo(() => data, [data]);

  console.log(data);

  return (
    // <div>
    //   {data?.length === 0 && (
    //     <p className="mt-7 text-red-500">No results found</p>
    //   )}
    //   {data?.map((option) => (
    //     <PublicationsItem key={option._id} option={option}></PublicationsItem>
    //   ))}
    // </div>
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
                  {memoizedThesisFilesData?.length === 0 && (
                    <p className="mt-7 text-red-500">No results found</p>
                  )}
                  {memoizedThesisFilesData?.map((option) => (
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

export default Search;
