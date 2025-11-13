"use client";
import CustomModal from "@/app/components/common/modals";
import RegistrationForm from "@/app/forms/registration.form";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт">
            <RegistrationForm onClose={onClose} />
        </CustomModal>
    );
};

export default RegistrationModal;
