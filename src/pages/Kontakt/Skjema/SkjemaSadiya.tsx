import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  FormError,
  FormContainer,
  FormTextarea,
  FormInput,
  FormLabel,
  FormText,
  CustomForm,
  Separator,
  SubmitButton,
  ButtonWrapper,
  SubmitMessage,
  StyledFontAwesomeIcon,
} from "../styled";

const SkjemaSadiya = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      const response = await fetch(
        "http://localhost:3001/api/send-email-sadiya",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const json = await response.json();
      if (json.message === "Email sent successfully") {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <h2>Sadiya</h2>
      <Separator />
      <CustomForm id="" onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          Send meg gjerne en melding med kontaktskjemaet under. Jeg svarer innen
          kort tid
        </FormText>
        <FormText>* - Påkrevd felt (Required field)</FormText>
        <FormLabel htmlFor="navn">Navn *</FormLabel>
        <Controller
          name="navn"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: "Minst 2 tegn",
            },
          }}
          render={({ field }) => (
            <>
              <FormInput
                {...field}
                type="text"
                name="navn"
                placeholder="Ditt navn"
              />
              {errors["navn"]?.type === "required" && (
                <FormError role="alert">
                  Vennligst fyll inn navnet ditt
                </FormError>
              )}
              {errors["navn"]?.message && (
                <FormError role="alert">{errors["navn"]?.message}</FormError>
              )}
            </>
          )}
        />
        <FormLabel htmlFor="epost">Epost *</FormLabel>
        <Controller
          name="epost"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ugyldig Epost format",
            },
            minLength: {
              value: 2,
              message: "Minst 2 tegn",
            },
          }}
          render={({ field }) => (
            <>
              <FormInput
                {...field}
                type="email"
                name="epost"
                placeholder="Din E-post"
              />
              {errors["epost"]?.type === "required" && (
                <FormError role="alert">
                  Vennligst fyll inn din e-post adresse
                </FormError>
              )}
              {errors["epost"]?.message && (
                <FormError role="alert">{errors["epost"]?.message}</FormError>
              )}
            </>
          )}
        />
        <FormLabel htmlFor="telefon">Telefonnummer </FormLabel>
        <Controller
          name="telefon"
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value:
                /^(?:\+\d{1,3})?(?:[\s.-]?\(?\d{3}\)?[\s.-]?)?\d{3,4}[\s.-]?\d{4}$/,
              message: "Ugyldig telefonnummber format",
            },
            minLength: {
              value: 8,
              message: "Minst 8 tall",
            },
          }}
          render={({ field }) => (
            <>
              <FormInput
                {...field}
                type="tel"
                name="telefon"
                placeholder="Ditt telefonnummer"
              />

              {errors["telefon"]?.message && (
                <FormError role="alert">{errors["telefon"]?.message}</FormError>
              )}
            </>
          )}
        />
        <FormLabel htmlFor="message">Melding *</FormLabel>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: "Melding er påkrevd",
            minLength: {
              value: 10,
              message: "Minimum 10 tegn ",
            },
            maxLength: {
              value: 1000,
              message: "Maks 1000 tegn ",
            },
          }}
          render={({ field }) => (
            <>
              <FormTextarea {...field} placeholder="Maks 1000 tegn" />
              {errors["message"] && (
                <FormError role="alert">{errors["message"].message}</FormError>
              )}
            </>
          )}
        />
        <ButtonWrapper>
          <SubmitButton type="submit">
            {isLoading ? <Loader /> : "Send"}
          </SubmitButton>
        </ButtonWrapper>
        {isError && (
          <ButtonWrapper>
            <FormError>
              Beklager, det ser ut til at det har oppstått en feil med å sende
              meldingen. Vennligst prøv igjen eller ved en senere anledning. Vi
              beklager ulempen.
            </FormError>
          </ButtonWrapper>
        )}
        {isSuccess && (
          <ButtonWrapper>
            <StyledFontAwesomeIcon icon={faCircleCheck} />
            <SubmitMessage>
              Meldingen din er sendt! Jeg tar kontakt med deg på den oppgitte
              eposten i meldingen
            </SubmitMessage>
          </ButtonWrapper>
        )}
      </CustomForm>
    </FormContainer>
  );
};

export default SkjemaSadiya;
