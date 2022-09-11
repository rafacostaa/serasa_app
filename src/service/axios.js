import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const fakeDatabase = require("./dbData");

mock.onGet("/").reply(() => [200, fakeDatabase.data]);

export default axios;
