import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = props => (
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
          <li>
            <img src={props.imageSrc} />
          </li>
        </ul>
      </div>
    </NavDiv>
  </WrapDiv>
);

export default Navigation;

const WrapDiv = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #4a4a4a;
  width: 100%;
`;

const NavDiv = styled.div`
    display: flex;
    background-color: #F3F3F3;
    box-shadow: 0 0 5px #e4e4e4;
    flex-basis: 78%;
    margin-left: 75px;
    height: 76px;
    align-items: center;
    justify-content: space-between;
    & > div {
        height: 100%;
        display: flex;
        align-items: center;
         & > span {
            margin-left: 25px;
            font-size:16px;
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
            &:last-child{ 
                width: 100px;
                margin: 0;
                border-left: 1px solid #e4e4e4;
                & > img {
                    border-radius: 50%;
                    height: 50px;
                    width: 50px;
                }
                &:hover {
                     background-color: #e4e4e4;
                }
            }
         & > a {
            display: inline-block;
            text-decoration: none;
            color: #4a4a4a;
            text-align:center;
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
`;
