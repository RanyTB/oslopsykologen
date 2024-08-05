import styled, { keyframes } from "styled-components";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { breakpoints } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
    padding: 0 0.25rem;
  }

  h1 {
    width: calc(100%);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
`;

export const StyledNav = styled(Nav)`
  margin: 1rem 0 1rem 0;
  border-bottom: 1px solid #dee2e6;

  .nav-item.show .nav-link,
  .nav-link.active {
    color: black;
    background-color: #d2b48c;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: black;
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .nav-link:hover {
    background-color: #d2b48c;
  }

  .nav-item {
    margin-bottom: -1px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  margin: 16px 0;
  text-decoration: none;
  background-color: #d2b48c;
  color: black;
  padding: 0.9rem 4rem;
  border: none;
  border-radius: 5px;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background-color 0.5s ease-in-out;

  &:hover {
    background-color: #c1a375;
    transform: translateY(-2px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-direction: column;
  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: ${fadeIn} 1s forwards;

  h2 {
    width: calc(100%);
    text-align: center;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Separator = styled.div`
  width: 49rem;
  border-bottom: 0.2rem solid #d2b48c;
  border-radius: 11px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 1.5rem 0;
  }
`;

export const CustomForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #d2b48c;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
`;

export const FormText = styled.p`
  font-weight: 500;
  color: #495057;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #d2b48c;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #d2b48c;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;
  resize: vertical;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const FormError = styled.p`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;

export const SubmitMessage = styled.p`
  color: black;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledFormSelect = styled(Form.Select)`
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2b48c;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  option[disabled] {
    color: #6c757d;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-top: 0.5rem;
  color: green;
  animation: ${fadeIn} 1s ease-in-out;
`;
