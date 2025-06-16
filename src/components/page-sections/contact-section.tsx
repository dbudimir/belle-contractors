"use client";

import { useActionState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "@/components/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/actions"; // Server action for the form
import type React from "react";

// Styled Components
const ContactSectionWrapper = styled.section`
  padding: 4rem 0;
  position: relative;
  min-height: 600px;
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 150vw;
  left: 25%;
  transform: translateX(-50%);
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 600px;
`;

const StyledCard = styled(Card)`
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  backdrop-filter: blur(4px);
  max-width: 32rem;
  width: 100%;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  padding: 0;
  margin-bottom: 1.5rem;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3c3744;
`;

const StyledCardDescription = styled(CardDescription)`
  color: #6b7280;
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

const StyledLabel = styled(Label)`
  font-weight: 500;
  color: #374151;
`;

const StyledInput = styled(Input)`
  margin-top: 0.25rem;
`;

const StyledTextarea = styled(Textarea)`
  margin-top: 0.25rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #3e3fa2;

  &:hover {
    background-color: #3066be;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const SuccessMessage = styled.p`
  font-size: 0.875rem;
  color: #16a34a;
  margin-top: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #dc2626;
  margin-top: 0.5rem;
`;

const ContactSection: React.FC = () => {
  const [formState, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  return (
    <ContactSectionWrapper id="contact">
      {/* Full-width background image */}
      <BackgroundImageContainer>
        <Image
          src="/images/construction-50-50.jpg"
          alt="Construction work in progress"
          fill
          className="object-cover"
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
                Let's build something great together.
              </StyledCardTitle>
              <StyledCardDescription>
                Whether you're planning a major project, need ongoing property
                maintenance, or have a quick repair, we're here to help.
              </StyledCardDescription>
            </StyledCardHeader>
            <StyledForm action={formAction}>
              <FormGroup>
                <StyledLabel htmlFor="name">Full Name</StyledLabel>
                <StyledInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g., John Doe"
                  required
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="email">Email Address</StyledLabel>
                <StyledInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g., john.doe@example.com"
                  required
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
                <StyledInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g., (555) 123-4567"
                />
              </FormGroup>
              <FormGroup>
                <StyledLabel htmlFor="message">Project Details</StyledLabel>
                <StyledTextarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={4}
                />
              </FormGroup>

              <Button
                text={isPending ? "Sending..." : "Get In Touch"}
                size="sm"
                color="#3e3fa2"
                onClick={() => {}}
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
