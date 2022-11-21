export default {
  name: "daybook",
  component: () => import(/* webpackChuckName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import(/* webpackChuckName: "daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected"),
    },
    {
      path: ":id",
      name: "entry",
      component: () => import(/* webpackChuckName: "daybook-entry" */ "@/modules/daybook/views/EntryView"),
      props: ({ params }) => {
        return {
          id: params.id,
        };
      },
    },
  ],
};
