import { RepositoryType } from "app/type/github";

export const isUserStared = (id: number) => {
  const githubStared = JSON.parse(
    localStorage.getItem('githubStared') || '{}'
  );
  return githubStared[id];
}

export const lastWeekUrl = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 7);

  const startDateString = startDate.toISOString().split('T')[0];
  const endDateString = endDate.toISOString().split('T')[0];

  const apiUrl = `https://api.github.com/search/repositories?q=created:${startDateString}..${endDateString}&sort=stars&order=desc`;

  return apiUrl;
}

export const githubLastWeekTrend = async (): Promise<RepositoryType[]> => {
  const url = lastWeekUrl();
  const data = await fetch(url);
  const json = await data.json();
  return json.items
}

export const githubStarAdd = (id: number) => {
  const githubStared = JSON.parse(
    localStorage.getItem('githubStared') || '{}'
  );
  githubStared[id] = true;
  localStorage.setItem('githubStared', JSON.stringify(githubStared));
}

export const githubStarDelete = (id: number) => {
  const githubStared = JSON.parse(
    localStorage.getItem('githubStared') || '{}'
  );
  if(githubStared[id]){
    delete githubStared[id];
  }
  localStorage.setItem('githubStared', JSON.stringify(githubStared));
}

