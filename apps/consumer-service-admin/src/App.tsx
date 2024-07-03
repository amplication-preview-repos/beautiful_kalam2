import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ProcessedMethodList } from "./processedMethod/ProcessedMethodList";
import { ProcessedMethodCreate } from "./processedMethod/ProcessedMethodCreate";
import { ProcessedMethodEdit } from "./processedMethod/ProcessedMethodEdit";
import { ProcessedMethodShow } from "./processedMethod/ProcessedMethodShow";
import { WebSocketConnectionList } from "./webSocketConnection/WebSocketConnectionList";
import { WebSocketConnectionCreate } from "./webSocketConnection/WebSocketConnectionCreate";
import { WebSocketConnectionEdit } from "./webSocketConnection/WebSocketConnectionEdit";
import { WebSocketConnectionShow } from "./webSocketConnection/WebSocketConnectionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="ProcessedMethod"
          list={ProcessedMethodList}
          edit={ProcessedMethodEdit}
          create={ProcessedMethodCreate}
          show={ProcessedMethodShow}
        />
        <Resource
          name="WebSocketConnection"
          list={WebSocketConnectionList}
          edit={WebSocketConnectionEdit}
          create={WebSocketConnectionCreate}
          show={WebSocketConnectionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
