import type { FormErrors } from "../components/Reviews/ReviewsForm/ReviewsForm";
import type { Comment } from "../types/types";
import isEmail from "validator/lib/isEmail";

export const validateReview = (formData:Comment) => {
    const errors: FormErrors = {
        ratingError: "",
        commentError: "",
        nameError: "",
        emailError: "",
    };

    if (formData.rating === 0) {
        errors.ratingError = "Please select a rating.";
    }

    if (!formData.comment.trim()) {
        errors.commentError = "Review cannot be empty.";
    } else if (formData.comment.trim().length < 10) {
        errors.commentError = "Review must contain at least 10 characters.";
    }

    if (!formData.reviewerName.trim()) {
        errors.nameError = "Name is required.";
    } else if (formData.reviewerName.trim().length < 3) {
        errors.nameError = "Name must contain at least 3 characters.";
    }

    if (!formData.reviewerEmail.trim()) {
        errors.emailError = "Email is required.";
    } else if (!isEmail(formData.reviewerEmail)) {
        errors.emailError = "Please enter a valid email.";
    }

    return errors;
};