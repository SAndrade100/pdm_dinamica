import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    InputContainer,
    InputLogin,
} from "./styles";

import { View } from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;

type FormInputProps = {
    name: string;
    control: any;
    placeholder: string;
    icon?: IconName;
    secureTextEntry?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
                                                 name,
                                                 control,
                                                 placeholder,
                                                 icon,
                                                 secureTextEntry = false,
                                             }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputContainer>
            <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                {icon && (
                    <Ionicons
                        name={icon}
                        size={24}
                        style={{ position: "absolute", left: 10 }}
                    />
                )}
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <InputLogin
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChange}
                            secureTextEntry={secureTextEntry}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false);
                                onBlur();
                            }}
                            isFocused={isFocused}
                        />
                    )}
                />
            </View>

        </InputContainer>
    );
};

export default FormInput;