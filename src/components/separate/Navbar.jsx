import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="navbar bg-base-100 px-[7%]">
      <div className="flex-1">
        <a className="normal-case text-xl font-semibold">InstinkStore</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow rounded-md w-[86vw]"
          >
            <div className="card-body ">
              <div className="form-control w-full max-w-4xl">
                <input
                  type="text"
                  placeholder="Find product"
                  className="input input-bordered w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src="https://media.discordapp.net/attachments/885110057736474634/1121797987765604482/icon.png"
                width="100"
                height="100"
                alt="Avatar"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-[75vw]"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
