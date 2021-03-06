import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  DropdownHandler,
  DropdownHeader,
  DropdownSection
} from "simplr-dropdown";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#F3F3F3"
    };
  }

  openMenu = () => {
    this.setState({ background: "#e4e4e4" });
  };
  closeMenu = () => {
    this.setState({ background: "#F3F3F3" });
  };

  render() {
    const props = this.props;
    return (
      <WrapDiv>
        <NavDiv>
          <div>
            <span>{props.CompanyName}</span>
          </div>
          <div>
            <ul>
              <li>
                <Link to={`/dashboard:${props.CompanyId}`} title="dashboard">
                  dashboard
                </Link>
              </li>
              <li>
                <Link to={`/projects:${props.CompanyId}`} title="projects">
                  projects
                </Link>
              </li>
              <li>
                <Link to={`/team:${props.CompanyId}`} title="team">
                  team
                </Link>
              </li>
              <li>
                <Link to={`/company:${props.CompanyId}`} title="company">
                  company
                </Link>
              </li>
              <li style={{ backgroundColor: this.state.background }}>
                <DropdownHandler
                  className="dropdown-handler"
                  closeOnSectionClick={true}
                  onOpen={this.openMenu}
                  onClose={this.closeMenu}
                >
                  <DropdownHeader className="dropdown-header">
                    <DropArea>
                      <img src={props.imageSrc} alt="Avatar" />
                    </DropArea>
                  </DropdownHeader>
                  <DropdownSection className="dropdown-section">
                    <DropDownDiv>
                      <ul>
                        <li>
                          <Link to={`/profile:${props.CompanyId}`}>
                            My profile
                          </Link>
                        </li>
                        <li>
                          <Link to={`/projects:${props.CompanyId}`}>
                            My projects
                            {props.projectsCount && (
                              <div>{props.projectsCount}</div>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/notifications:${props.CompanyId}`}>
                            notifications
                            {props.notificationsCount && (
                              <div>{props.notificationsCount}</div>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/tasks:${props.CompanyId}`}>
                            tasks
                            {props.tasksCount && <div>{props.tasksCount}</div>}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/help`}>help</Link>
                        </li>
                      </ul>
                    </DropDownDiv>
                  </DropdownSection>
                </DropdownHandler>
              </li>
            </ul>
          </div>
        </NavDiv>
      </WrapDiv>
    );
  }
}

export default Navigation;

const WrapDiv = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #4a4a4a;
  width: 100%;
  @media (max-width: 740px) {
    margin-top: 0;
  }
`;

const DropArea = styled.div`
  width: 100px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`;

const DropDownDiv = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 190px;
  left: -105px;
  margin-top: 5px;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  box-shadow: 0 0 25px #e4e4e4;
  &:before {
    content: " ";
    position: absolute;
    top: -16px;
    right: 22px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 16px 14px;
    border-color: transparent transparent #ffffff transparent;
    z-index: 3;
  }
  &:after {
    content: " ";
    position: absolute;
    top: -17px;
    right: 22px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 16px 14px;
    border-color: transparent transparent #e4e4e4 transparent;
  }
  & > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-flow: column;
    & > li {
      list-style-type: none;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      & > a {
        text-decoration: none;
        color: black;
        width: 100%;
        margin: 0 25px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e4e4e4;
        &:hover {
          border-bottom: 1px solid transparent;
        }
        & > div {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f26620;
          border-radius: 10px;
          color: white;
          font-size: 10px;
          font-weight: 900;
        }
      }
      &:hover {
        background-color: #e4e4e4;
      }

      &:first-child {
        &:hover {
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }
      }
      &:last-child {
        &:hover {
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
    }
  }
`;

const NavDiv = styled.div`
  display: flex;
  background-color: #f3f3f3;
  box-shadow: 0 0 4px #e4e4e4;
  flex-basis: 78%;
  height: 76px;
  align-items: center;
  justify-content: space-between;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;

    & > span {
      margin-left: 25px;
      font-size: 16px;
    }

    & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;

      & > li {
        display: inline-flex;
        align-items: center;
        margin-right: 50px;
        height: 76px;
        justify-content: center;
        text-transform: uppercase;

        &:last-child {
          width: 100px;
          margin: 0;
          border-left: 1px solid #e4e4e4;

          &:hover {
            background-color: #e4e4e4 !important;
          }

          & > div {
            position: relative;
          }
        }

        & > a {
          display: inline-block;
          text-decoration: none;
          color: #4a4a4a;
          text-align: center;

          &:after {
            display: block;
            content: attr(title);
            font-weight: 700;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }

          &:hover {
            color: #f26620;
            font-weight: 700;
          }
        }
      }
    }
  }

  @media (max-width: 740px) {
    flex-basis: 100%;
    flex-direction: column;
    height: auto;
    & > div {
      height: auto;
      & > span {
        margin-top: 20px;
        margin-left: 0;
      }

      & > ul {
        flex-direction: column-reverse;
        justify-content: center;
        padding: 0;
        min-width: 375px;
        & > li {
          margin: 0;
          &:last-child {
            border-left: none;
            border-bottom: 1px solid #e4e4e4;
            align-self: center;
          }
          & > a {
            height: 30px;
            width: 100%;
          }
        }
      }
    }
  }
`;
