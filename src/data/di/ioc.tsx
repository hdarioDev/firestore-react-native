import { asFunction, createContainer } from 'awilix';

import LoginViewModel from "@/src/domain/models/LoginViewModel";
import RegisterViewModel from "@/src/domain/models/RegisterViewModel";

const container = createContainer();

container.register({
    LoginViewModel: asFunction(LoginViewModel),
    RegisterViewModel: asFunction(RegisterViewModel),
});

export default container;
