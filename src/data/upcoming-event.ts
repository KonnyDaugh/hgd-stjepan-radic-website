export type UpcomingEvent = {
  title: string;
  monthLabel: string;
  date: string | null;
  time: string | null;
  venue: string | null;
  announcement: string;
  admission: string | null;
};

export const upcomingEvent: UpcomingEvent = {
  title: "Koncert HGD-a „Stjepan Radić“",
  monthLabel: "Prosinac 2026.",
  date: null,
  time: null,
  venue: null,
  announcement:
    "Točan datum i lokacija bit će objavljeni uskoro.",
    admission: null,
};