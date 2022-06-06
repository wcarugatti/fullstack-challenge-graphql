import {
  Autocomplete,
  AutocompleteRenderInputParams,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { SearchTextField, OptionsListElement } from "./styles";
import { isEmptyArray } from "formik";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Add, ClearOutlined, Search } from "@mui/icons-material";
import { SEARCH_CUSTOMERS } from "./../../graphql/queries/searchCustomers";
import { ICustomerOption } from "./ICustomerOption";

interface IProps {
  setCustomerId: React.Dispatch<React.SetStateAction<string>>;
  createCustomerFromInput: (searchInput: string) => void;
  externalSelectedCustomer: ICustomerOption | null;
}

const SearchCustomer: React.FC<IProps> = ({
  setCustomerId,
  createCustomerFromInput,
  externalSelectedCustomer,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomerOption[]>(
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const { data: autocompleteResults } = useQuery(SEARCH_CUSTOMERS, {
    variables: {
      searchInput,
    },
    skip: searchInput === "",
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    setCustomerId(selectedCustomer.length > 0 ? selectedCustomer[0].id : "");
  }, [selectedCustomer, setCustomerId]);

  useEffect(() => {
    if (externalSelectedCustomer && externalSelectedCustomer.id) {
      setSelectedCustomer([externalSelectedCustomer]);
    } else {
      setSelectedCustomer([]);
    }
  }, [externalSelectedCustomer]);

  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newCustomers: ICustomerOption[]
  ) => {
    if (isEmptyArray(newCustomers)) {
      setSelectedCustomer([]);
    } else {
      setSelectedCustomer([newCustomers[newCustomers.length - 1]] ?? []);
    }
  };

  const handleInputChange = (
    _: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setSearchInput(newInputValue);
  };

  const handleGetOptionLabel = (option: ICustomerOption) =>
    `${option.firstName} ${option.lastName}`;

  const handleRenderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: ICustomerOption
  ) => (
    <OptionsListElement {...props} key={option.id}>
      <div>{`${option.firstName} ${option.lastName}`}</div>
      <div>{`${option.email}`}</div>
    </OptionsListElement>
  );

  const handleRenderInput = (params: AutocompleteRenderInputParams) => (
    <SearchTextField
      {...params}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <Search />
            {params.InputProps.startAdornment}
          </InputAdornment>
        ),
        endAdornment: AddNotFoundCustomer(
          !autocompleteResults?.searchCustomers?.length &&
            searchInput !== "" &&
            selectedCustomer.length === 0
        ),
      }}
      placeholder={isEmptyArray(selectedCustomer) ? "Search name or email" : ""}
    />
  );

  const AddNotFoundCustomer = (showIcon: boolean) => {
    if (showIcon) {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={() => {
              createCustomerFromInput(searchInput);
              setSearchInput("");
            }}
          >
            <Add />
          </IconButton>
        </InputAdornment>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Autocomplete
      multiple
      disablePortal
      ChipProps={{
        color: "primary",
        deleteIcon: <ClearOutlined />,
      }}
      value={selectedCustomer}
      onChange={handleChange}
      popupIcon={<></>}
      inputValue={searchInput}
      onInputChange={handleInputChange}
      options={autocompleteResults?.searchCustomers || []}
      getOptionLabel={handleGetOptionLabel}
      filterOptions={(options) => options}
      renderOption={handleRenderOption}
      renderInput={handleRenderInput}
    />
  );
};

export default SearchCustomer;
