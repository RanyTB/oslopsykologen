import { useForm, Controller } from "react-hook-form";
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

const GenerellSkjema = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isLoading = false; // Example loading state
  const isError = false; // Example error state
  const isSuccess = false; // Example success state

  const renderErrorMessage = (
    error:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined
  ): React.ReactNode => {
    if (!error) return null;
    if (typeof error === "string") return error;
    if ("message" in error && error.message) return error.message;
    return null;
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(json.message);

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
      <h2>Generelt</h2>
      <Separator />
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          Send oss gjerne en melding med kontaktskjemaet under. Vi svarer innen
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
              <FormInput {...field} type="text" placeholder="Ditt navn" />
              {errors.navn && (
                <FormError role="alert">
                  {errors.navn.type === "required"
                    ? "Vennligst fyll inn navnet ditt"
                    : renderErrorMessage(errors.navn)}
                </FormError>
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
              <FormInput {...field} type="email" placeholder="Din E-post" />
              {errors.epost && (
                <FormError role="alert">
                  {errors.epost.type === "required"
                    ? "Vennligst fyll inn din e-post adresse"
                    : renderErrorMessage(errors.epost)}
                </FormError>
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
                placeholder="Ditt telefonnummer"
              />
              {errors["telefon"]?.message && (
                <FormError role="alert">
                  {renderErrorMessage(errors["telefon"]?.message)}
                </FormError>
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
              {errors.message && (
                <FormError role="alert">
                  {renderErrorMessage(errors.message)}
                </FormError>
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
            <SubmitMessage>
              Beklager, det ser ut til at det har oppstått en feil med å sende
              meldingen. Vennligst prøv igjen eller ved en senere anledning. Vi
              beklager ulempen.
            </SubmitMessage>
          </ButtonWrapper>
        )}
        {isSuccess && (
          <ButtonWrapper>
            <StyledFontAwesomeIcon icon={faCircleCheck} />
            <SubmitMessage>
              Meldingen din er sendt! Vi tar kontakt med deg på den oppgitte
              eposten i meldingen
            </SubmitMessage>
          </ButtonWrapper>
        )}
      </CustomForm>
    </FormContainer>
  );
};

export default GenerellSkjema;
