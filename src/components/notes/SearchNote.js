import React from 'react';
import { Container, Navbar, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

class SearchNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ""
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.props.searchNote(event.target.value)
  }

  render() {
    return (
      <Navbar sticky="top" >
        <Container>
          <Navbar.Brand>
            <h2>Catatan</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 border-0 shadow"
                onChange={this.onSearchChangeEventHandler}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

SearchNote.propTypes = {
  searchNote: PropTypes.func.isRequired
}

export default SearchNote;