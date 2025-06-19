"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "@/components/Button";
import type React from "react";

// Styled Components
const ContactSectionWrapper = styled.section`
  padding: 6rem 0;
  position: relative;
  min-height: 600px;
  max-width: 100vw;
  overflow: hidden;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 4rem 0;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 120%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  transform: translateX(-15%);
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding: 0 1.5rem;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 0 1rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 600px;
`;

const StyledCard = styled.div`
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  backdrop-filter: blur(4px);
  max-width: 32rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 1.5rem;
  }
`;

const StyledCardHeader = styled.div`
  padding: 0;
  margin-bottom: 1.5rem;
`;

const StyledCardTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 700;
  color: #3c3744;
  margin: 0 0 1rem 0;
  max-width: 25rem;
`;

const StyledCardDescription = styled.p`
  color: #6b7280;
  margin: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

const StyledInput = styled.input`
  margin-top: 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const StyledTextarea = styled.textarea`
  margin-top: 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const SuccessMessage = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-size: 0.875rem;
  color: #166534;
  font-weight: 500;
  display: flex;
  align-items: center;

  &::before {
    content: "✓";
    margin-right: 0.75rem;
    font-weight: 700;
    color: #16a34a;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-size: 0.875rem;
  color: #991b1b;
  font-weight: 500;
  display: flex;
  align-items: center;

  &::before {
    content: "⚠";
    margin-right: 0.75rem;
    font-weight: 700;
    color: #dc2626;
    font-size: 1rem;
  }
`;

interface FormState {
  success: boolean;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setFormState(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setFormState(result);

      if (result.success) {
        setFormState({
          success: true,
          message: result.message,
        });
      }
    } catch (error) {
      setFormState({
        success: false,
        message: error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ContactSectionWrapper id="contact">
      {/* Full-width background image */}
      <BackgroundImageContainer>
        <StyledImage
          src="/images/construction-50-50.jpg"
          alt="Construction work in progress"
          fill
        />
        {/* Overlay for better text readability */}
        <BackgroundOverlay />
      </BackgroundImageContainer>

      {/* Content positioned above background */}
      <ContentContainer>
        <FlexContainer>
          {/* Contact form */}
          <StyledCard>
            <StyledCardHeader>
              <StyledCardTitle>
                Let&apos;s build something great together.
              </StyledCardTitle>
              <StyledCardDescription>
                Whether you're planning a major project, need ongoing property
                maintenance, or have a quick repair, we're here to help.
              </StyledCardDescription>
            </StyledCardHeader>
            <StyledForm onSubmit={handleSubmit}>
              <FormGroup>
                <StyledLabel htmlFor="name">Full Name *</StyledLabel>
                <StyledInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="First and Last Name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="email">Email Address *</StyledLabel>
                <StyledInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="phone">Phone Number *</StyledLabel>
                <StyledInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="message">
                  How can we help? (optional)
                </StyledLabel>
                <StyledTextarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                />
              </FormGroup>

              <Button
                text={isPending ? "Sending..." : "Get In Touch"}
                size="sm"
                color="#3e3fa2"
                type="submit"
                disabled={isPending}
              />

              {formState?.success === true && (
                <SuccessMessage>{formState.message}</SuccessMessage>
              )}
              {formState?.success === false && (
                <ErrorMessage>Error: {formState.message}</ErrorMessage>
              )}
            </StyledForm>
          </StyledCard>
        </FlexContainer>
      </ContentContainer>
    </ContactSectionWrapper>
  );
};
export default ContactSection;
