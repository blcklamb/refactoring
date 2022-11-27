interface classProps {
  name: string;
  country: string;
}
class Organization {
  _data: classProps;

  constructor(data: classProps) {
    this._data = data;
  }

  set name(aString) {
    this._data.name = aString;
  }

  get name() {
    return this._data.name;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}

// 읽기 예
const result = `<h1>${getOrganization().name}</h1>`;
// 쓰기 예
getOrganization().name = "무지 타이거";
