import React from 'react'
import { Column, Box, Label, Title, Table, Tab } from 'rbx'

const Services = () => {
  const renderTable = () => {
    let table = []
    for (let i = 1; i < 11; i++) {
      table.push(
        <Table.Row key={i}>
          <Table.Heading>{i}</Table.Heading>
          <Table.Cell>T{i}</Table.Cell>
          <Table.Cell>mentimun_mentah {i + 1}</Table.Cell>
          <Table.Cell>
            <h2 className="main-services">
              <span>
                <i className="fas fa-flag fa-lg"></i>
              </span>
            </h2>
            <span className="indicator-services">
              <i className="far fa-cogs"></i> |{' '}
              <i className="far fa-power-off"></i>
            </span>
          </Table.Cell>
          <Table.Cell>
            <h2 className="main-services">
              <span>
                <i className="fas fa-swords fa-lg"></i>
              </span>
            </h2>
            <span className="indicator-services">
              <i className="far fa-cogs"></i> |{' '}
              <i className="far fa-power-off"></i>
            </span>
          </Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
          <Table.Cell>0/0</Table.Cell>
        </Table.Row>,
      )
    }
    return table
  }

  return (
    <Box className="panel-box">
      <Title size={4} className="box__title">
        Service Status
      </Title>
      <Table hoverable fullwidth className="table">
        <Table.Head>
          <Table.Row>
            <Table.Heading>#</Table.Heading>
            <Table.Heading>Team ID</Table.Heading>
            <Table.Heading>Team Name</Table.Heading>
            <Table.Heading>S01 (services)</Table.Heading>
            <Table.Heading>S02 (services)</Table.Heading>
            <Table.Heading>S03 (services)</Table.Heading>
            <Table.Heading>S04 (services)</Table.Heading>
            <Table.Heading>S05 (services)</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>{renderTable()}</Table.Body>
      </Table>

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
        :global(.panel-box) {
          margin-top: 20px;
        }
        :global(.fa-cogs) {
          color: #f0a500 !important;
        }
        :global(.fa-flag) {
          color: #2b580c !important;
        }
        :global(.fa-swords) {
          color: #fe346e !important;
        }
      `}</style>
    </Box>
  )
}

export default Services
