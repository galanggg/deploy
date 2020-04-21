import { useState } from "react";
import { Column, Box, Label, Title, Table, Tab } from "rbx";

const Scoreboard = () => {
  const [activeTab, setActiveTab] = useState(9);

  const renderTable = () => {
    let table = [];
    for (let i = 1; i < 11; i++) {
      table.push(
        <Table.Row key={i}>
          <Table.Heading>{i}</Table.Heading>
          <Table.Cell>T{i}</Table.Cell>
          <Table.Cell>mentimun_mentah</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
        </Table.Row>
      );
    }
    return table;
  };

  const renderTab = () => {
    let tab = [];
    for (let i = 1; i < 10; i++) {
      tab.push(
        <Tab
          key={i}
          active={activeTab === i ? true : false}
          onClick={() => {
            setActiveTab(i);
          }}
        >
          <span>R0{i}</span>
        </Tab>
      );
    }
    return tab;
  };

  return (
    <Column>
      <Box>
        <Column.Group textAlign="centered">
          <Column>
            <Label>Games ends in</Label>
            01:54:23
          </Column>
          <Column>
            <Label>Current Tick</Label>
            09
          </Column>
          <Column>
            <Label>Next tick about</Label>
            02:54
          </Column>
        </Column.Group>
      </Box>

      <Box>
        <Title size={4} className="box__title">
          Full Scoreboard
        </Title>
        <Table hoverable fullwidth className="table">
          <Table.Head>
            <Table.Row>
              <Table.Heading>#</Table.Heading>
              <Table.Heading>Team ID</Table.Heading>
              <Table.Heading>Team Name</Table.Heading>
              <Table.Heading>S01</Table.Heading>
              <Table.Heading>S02</Table.Heading>
              <Table.Heading>S03</Table.Heading>
              <Table.Heading>S04</Table.Heading>
              <Table.Heading>S05</Table.Heading>
              <Table.Heading>S06</Table.Heading>
              <Table.Heading>S07</Table.Heading>
              <Table.Heading>Attack Pts</Table.Heading>
              <Table.Heading>Defense Pts</Table.Heading>
              <Table.Heading>Total Pts</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>{renderTable()}</Table.Body>
        </Table>
      </Box>

      <Box>
        <Title size={4} className="box__title">
          Per Round Scoreboard
        </Title>

        <Tab.Group align="centered" kind="boxed">
          {renderTab()}
        </Tab.Group>

        <Table hoverable fullwidth className="table">
          <Table.Head>
            <Table.Row>
              <Table.Heading>#</Table.Heading>
              <Table.Heading>Team ID</Table.Heading>
              <Table.Heading>Team Name</Table.Heading>
              <Table.Heading>S01</Table.Heading>
              <Table.Heading>S02</Table.Heading>
              <Table.Heading>S03</Table.Heading>
              <Table.Heading>S04</Table.Heading>
              <Table.Heading>S05</Table.Heading>
              <Table.Heading>S06</Table.Heading>
              <Table.Heading>S07</Table.Heading>
              <Table.Heading>Attack Pts</Table.Heading>
              <Table.Heading>Defense Pts</Table.Heading>
              <Table.Heading>Total Pts</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>{renderTable()}</Table.Body>
        </Table>
      </Box>

      <style jsx>{`
        :global(.table th) {
          text-align: center !important;
        }
        :global(.table td) {
          text-align: center !important;
        }
        :global(.table thead) {
          border-top: solid 2px rgb(229, 229, 229) !important;
        }
        :global(.tabs li.is-active a) {
          background-color: #3273dc !important;
          color: #fff;
        }
        :global(.box__title) {
          margin-bottom: 15px !important;
        }
      `}</style>
    </Column>
  );
};

export default Scoreboard;
