import { useMutation, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import {
  Container,
  FormButtons,
  FormCard,
  FormContent,
  FormDeleteButton,
  FormGrid,
  FormGridRow,
  FormSubmitButton,
} from "./styles";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import SearchCustomer from "../SearchCustomer/SearchCustomer";
import FormSelect from "../FormSelect/FormSelect";
import { OPTIONS_QUERY } from "./../../graphql/queries/optionsQuery";
import { GET_CUSTOMER } from "../../graphql/queries/getCustomer";
import { CREATE_CUSTOMER } from "./../../graphql/queries/createCustomer";
import { UPDATE_CUSTOMER } from "../../graphql/queries/updateCustomer";
import { REMOVE_CUSTOMER } from "../../graphql/queries/removeCustomer";
import { ICustomerOption } from "./../SearchCustomer/ICustomerOption";
import FormTextField from "../FormTextField/FormTextField";

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  planId: Yup.string().required("Required"),
  paymentGatewayId: Yup.string().required("Required"),
});

interface ICustomerForm {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  planId: string;
  paymentGatewayId: string;
}

const EMPTY_FORM: ICustomerForm = {
  firstName: "",
  lastName: "",
  role: "",
  email: "",
  planId: "",
  paymentGatewayId: "",
};

const CustomerForm: React.FC = () => {
  const [customerId, setCustomerId] = useState<string>("");
  const [externalSelectedCustomer, setExternalSelectedCustomer] =
    useState<ICustomerOption | null>(null);

  const [formInitialValues, setFormInitialValues] =
    useState<ICustomerForm>(EMPTY_FORM);

  const { data: optionsQuery } = useQuery(OPTIONS_QUERY);

  const { data: selectedCustomerData } = useQuery(GET_CUSTOMER, {
    variables: {
      customerId,
    },
    skip: customerId === "",
    fetchPolicy: "no-cache",
  });

  const [createCustomer] = useMutation(CREATE_CUSTOMER, {
    update(_, { data: { createCustomer } }) {
      const { id, firstName, lastName, email } = createCustomer;
      setExternalSelectedCustomer({ id, firstName, lastName, email });
    },
  });

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER, {
    update(_, { data: { updateCustomer } }) {
      const { id, firstName, lastName, email } = updateCustomer;
      setExternalSelectedCustomer({ id, firstName, lastName, email });
    },
  });

  const [removeCustomer] = useMutation(REMOVE_CUSTOMER, {
    update() {
      setExternalSelectedCustomer({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      });
    },
  });

  const createCustomerFromInput = (searchInput: string): void => {
    if (searchInput.indexOf("@") >= 0) {
      setFormInitialValues({ ...EMPTY_FORM, email: searchInput });
    } else {
      setFormInitialValues({ ...EMPTY_FORM, firstName: searchInput });
    }
  };

  const handleSubmit = (values: ICustomerForm) => {
    if (!customerId) {
      createCustomer({ variables: values });
    } else {
      updateCustomer({
        variables: { ...values, updateCustomerId: customerId },
      });
    }
  };

  const handleRemoveCustomer = () => {
    removeCustomer({
      variables: {
        removeCustomerId: customerId,
      },
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: FORM_VALIDATION,
    initialValues: formInitialValues,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    const customerData = selectedCustomerData?.getCustomer;
    setFormInitialValues({
      firstName: customerData?.firstName ?? "",
      lastName: customerData?.lastName ?? "",
      role: customerData?.role ?? "",
      email: customerData?.email ?? "",
      planId: customerData?.subscription?.planId ?? "",
      paymentGatewayId: customerData?.subscription?.paymentGatewayId ?? "",
    });
  }, [selectedCustomerData]);

  return (
    <Container>
      <FormCard variant="outlined">
        <FormContent onSubmit={formik.handleSubmit}>
          <Typography
            sx={{ fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            CUSTOMER MANAGEMENT
          </Typography>
          <FormGrid container spacing={2}>
            <FormGridRow item xs={12}>
              <SearchCustomer
                setCustomerId={setCustomerId}
                createCustomerFromInput={createCustomerFromInput}
                externalSelectedCustomer={externalSelectedCustomer}
              />
            </FormGridRow>
            <FormGridRow item xs={12} sm={6}>
              <FormTextField
                formik={formik}
                inputId="firstName"
                placeholder="First Name"
              />
            </FormGridRow>
            <FormGridRow item xs={12} sm={6}>
              <FormTextField
                inputId="lastName"
                formik={formik}
                placeholder="Last Name"
              />
            </FormGridRow>
            <FormGridRow item xs={12}>
              <FormTextField
                inputId="role"
                formik={formik}
                placeholder="Role"
              />
            </FormGridRow>
            <FormGridRow item xs={12}>
              <FormTextField
                inputId="email"
                formik={formik}
                placeholder="Email"
              />
            </FormGridRow>
            <FormGridRow item xs={12}>
              <FormSelect
                formik={formik}
                options={optionsQuery?.Plans}
                inputId="planId"
                keyParameter="id"
                placeholder="Subscription Plan"
                optionDisplay={(option) =>
                  `${option.name} (${
                    option.byllingCycle === 1 ? "Monthly" : "Yearly"
                  })`
                }
              />
            </FormGridRow>
            <FormGridRow item xs={12}>
              <FormSelect
                formik={formik}
                options={optionsQuery?.PaymentGateways}
                inputId="paymentGatewayId"
                keyParameter="id"
                placeholder="Payment Gateway"
                optionDisplay={(option) => option.name}
              />
            </FormGridRow>
          </FormGrid>
          <FormButtons>
            {!customerId ? (
              <div className="button-wrapper">
                <FormSubmitButton type="submit" variant="contained">
                  Add Customer
                </FormSubmitButton>
              </div>
            ) : (
              <>
                <div className="button-wrapper">
                  <FormSubmitButton type="submit" variant="contained">
                    Save Details
                  </FormSubmitButton>
                </div>
                <div className="button-wrapper">
                  <FormDeleteButton
                    color="error"
                    onClick={handleRemoveCustomer}
                  >
                    Delete Customer
                  </FormDeleteButton>
                </div>
              </>
            )}
          </FormButtons>
        </FormContent>
      </FormCard>
    </Container>
  );
};

export default CustomerForm;
