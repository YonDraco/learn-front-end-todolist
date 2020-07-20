import { atom, selector } from "recoil";

export const filterState = atom({
  key: "filterState", //id  của mảnh dữ liệu
  default: "" //giá trị mặc định của dữ liệu.
});

export const currentPageState = atom({
  key: "currentPageState",
  default: 1
});

export const maxPageState = atom({
  key: "maxPageState",
  default: 1
});

export const contactListState = selector({
  key: "contactListState",
  get: async ({ get }) => {
    const currentPage = get(currentPageState);
    //XML HTTP request
    //fetch api
    const res = await fetch("https://reqres.in/api/users?page=" + currentPage);
    const data = await res.json();
    return data;
  }
});

export const filteredContactListSate = selector({
  key: "filteredContactListSate",
  get: ({ get }) => {
    const filterVal = get(filterState);
    const contactList = get(contactListState);
    console.log(contactList);
    if (filterVal) {
      const data = contactList.data.filter(u => {
        return (
          u.last_name.includes(filterVal) || u.first_name.includes(filterVal)
        );
      });
      return { ...contactList, data };
    } else {
      return contactList;
    }
  }
});
