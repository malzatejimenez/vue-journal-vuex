import journalyApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalyApi.get("/entries.json");

  const entries = [];
  if (!data) return commit("setEntries", entries);
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, date, picture, text } = entry;
  const data = { date, picture, text };
  const { data: _entry } = await journalyApi.put(`/entries/${id}.json`, data);
  _entry.id = id;
  commit("updateEntry", { ..._entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;
  const _entry = { date, picture, text };
  const { data } = await journalyApi.post("/entries.json", _entry);
  _entry.id = data.name;
  commit("addEntry", { ..._entry });
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalyApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
};
