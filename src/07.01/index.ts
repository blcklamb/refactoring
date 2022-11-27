const organization = { name: "애크미 구스베리", country: "GB" };

function getRawDataOfOrganization() {
  return organization;
}

// 읽기 예
const result = `<h1>${getRawDataOfOrganization().name}</h1>`;
// 쓰기 예
getRawDataOfOrganization().name = "무지 타이거";
