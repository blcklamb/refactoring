interface classProps {
  name: string;
  country: string;
}
class Organization {
  _name: string;
  _country: string;

  constructor(data: classProps) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getOrganization() {
  return organization;
}

// 읽기 예
const result = `<h1>${getOrganization().name}</h1>`;
// 쓰기 예
getOrganization().name = "무지 타이거";
