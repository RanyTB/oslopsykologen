import {
  useForm,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
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
  StyledFormSelect,
  SubmitMessage,
  StyledFontAwesomeIcon,
} from "../styled";
import { useState } from "react";

const GruppeSkjema = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const renderErrorMessage = (
    error:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined
  ): string | null => {
    if (!error) return null;
    if (typeof error === "string") return error;
    if ("message" in error) {
      if (typeof error.message === "string") {
        return error.message;
      }
      // Handle other cases if needed
    }
    // Handle other cases if needed
    return null;
  };

  const onSubmit = async (data: unknown) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      const response = await fetch(
        "http://localhost:3001/api/send-email-gruppe",
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
      <h2>Bestill Gruppeterapi</h2>
      <Separator />
      <CustomForm id="" onSubmit={handleSubmit(onSubmit)}>
        <FormText>
          Bestill gruppeterapi med skjemaet under. Velg type gruppe du vil melde
          deg på
        </FormText>
        <FormText>* - Påkrevd felt</FormText>{" "}
        <FormLabel htmlFor="grupper">Gruppeterapi *</FormLabel>
        <Controller
          name="grupper"
          control={control}
          defaultValue=""
          rules={{ required: "Vennligst velg en gruppeterapi" }}
          render={({ field }) => (
            <StyledFormSelect {...field} aria-label="Default select example">
              <option value="" disabled>
                Velg gruppeterapi
              </option>
              <option value="adhd-gruppe">ADHD gruppe</option>
              <option value="Relasjons/tilknytning/selvfølelse-gruppe">
                Relasjons/tilknytning/selvfølelse gruppe
              </option>
              <option value="Generasjon-prestasjon/stressmestrings-gruppe">
                Generasjon prestasjon/stressmestrings gruppe
              </option>
              <option value="Third-Culture-Kids-gruppe">
                Third Culture Kids gruppe
              </option>
            </StyledFormSelect>
          )}
        />
        {errors.grupper && (
          <FormError>{renderErrorMessage(errors.grupper)}</FormError>
        )}
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
              {errors.navn?.type === "required" && (
                <FormError role="alert">
                  Vennligst fyll inn navnet ditt
                </FormError>
              )}
              {errors.navn?.message && (
                <FormError role="alert">
                  {renderErrorMessage(errors.navn)}
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
              <FormInput
                {...field}
                type="email"
                name="epost"
                placeholder="Din e-post"
              />
              {errors.epost?.type === "required" && (
                <FormError role="alert">
                  Vennligst fyll inn din e-post adresse
                </FormError>
              )}
              {errors.epost?.message && (
                <FormError role="alert">
                  {renderErrorMessage(errors.epost)}
                </FormError>
              )}
            </>
          )}
        />
        <FormLabel htmlFor="telefon">Telefonnummer</FormLabel>
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
              {errors.telefon?.message && (
                <FormError role="alert">
                  {renderErrorMessage(errors.telefon)}
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
            <FormError>
              Beklager, det ser ut til at det har oppstått en feil med å
              bestille gruppetime. Vennligst prøv igjen eller ved en senere
              anledning. Vi beklager ulempen.
            </FormError>
          </ButtonWrapper>
        )}
        {isSuccess && (
          <ButtonWrapper>
            <StyledFontAwesomeIcon icon={faCircleCheck} />
            <SubmitMessage>
              Gruppetimen din er bestilt! Vi tar kontakt med deg på den oppgitte
              eposten i søknaden.
            </SubmitMessage>
          </ButtonWrapper>
        )}
      </CustomForm>
    </FormContainer>
  );
};

export default GruppeSkjema;
