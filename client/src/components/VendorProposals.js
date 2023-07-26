import React, { useRef, useState } from "react";
import "../styles/VendorProposals.css";
import VendorProposalTile from "./VendorProposalTile";
import CreateProposal from "./CreateProposal";
import Loader from "./Loader";
import { useOutletContext } from "react-router-dom";
import { useAccountInfo } from "../contexts/accountContext";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function toastError(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

function toastSuccess(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const createproposalapi =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal/";

function VendorProposals() {
  const context = useAccountInfo();
  const { proposals, getVendorProposals, proposalLoading, setProposalLoading } =
    useOutletContext();

  const [search, setSearched] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnname, setbtnname] = useState("Add");
  const [createimg, setcreateimg] = useState([]);
  const [editproposal, setEditProposal] = useState([]);
  const event_name_ref = useRef(null);
  const event_place_ref = useRef(null);
  const proposal_type_ref = useRef(null);
  const event_type_ref = useRef(null);
  const budget_ref = useRef(null);
  const event_from_date_ref = useRef(null);
  const event_to_date_ref = useRef(null);
  const description_ref = useRef(null);
  const food_prefs_ref = useRef(null);
  const events_ref = useRef(null);
  const close_ref = useRef();

  function setModalContent(proposal_to_view) {
    event_name_ref.current.value = proposal_to_view.event_name;
    event_place_ref.current.value = proposal_to_view.event_place;
    proposal_type_ref.current.value = proposal_to_view.proposal_type;
    event_type_ref.current.value = proposal_to_view.event_type;
    budget_ref.current.value = proposal_to_view.budget;
    event_from_date_ref.current.value = proposal_to_view.event_from_date;
    event_to_date_ref.current.value = proposal_to_view.event_to_date;
    description_ref.current.value = proposal_to_view.description;
    food_prefs_ref.current.value = proposal_to_view.food_prefs;
    events_ref.current.value = proposal_to_view.events;
    setcreateimg([...proposal_to_view.images]);
  }

  function resetModalContent() {
    event_name_ref.current.value = "";
    event_place_ref.current.value = "";
    proposal_type_ref.current.value = "";
    event_type_ref.current.value = "";
    budget_ref.current.value = "";
    event_from_date_ref.current.value = "";
    event_to_date_ref.current.value = "";
    description_ref.current.value = "";
    food_prefs_ref.current.value = "";
    events_ref.current.value = "";
    setcreateimg([]);
  }

  async function createproposalindb(
    createimg,
    event_name_ref,
    event_place_ref,
    proposal_type_ref,
    event_type_ref,
    budget_ref,
    event_from_date_ref,
    event_to_date_ref,
    description_ref,
    food_prefs_ref,
    events_ref
  ) {
    try {
      let data = await axios({
        method: "post",
        url: createproposalapi,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: {
          event_name: event_name_ref,
          event_place: event_place_ref,
          proposal_type: proposal_type_ref,
          event_type: event_type_ref,
          budget: `${budget_ref}`,
          event_from_date: event_from_date_ref,
          event_to_date: event_to_date_ref,
          description: description_ref,
          images: createimg,
          food_prefs: food_prefs_ref,
          events: events_ref,
        },
      });
      setLoading(false);
      document.getElementById("modal-close-btn").click();
      setProposalLoading(true);

      resetModalContent();
      getVendorProposals();
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  }

  async function editproposalindb(
    createimg,
    event_name_ref,
    event_place_ref,
    proposal_type_ref,
    event_type_ref,
    budget_ref,
    event_from_date_ref,
    event_to_date_ref,
    description_ref,
    food_prefs_ref,
    events_ref
  ) {
    try {
      let data = await axios({
        method: "put",
        url:
          "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal/" +
          editproposal._id,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: {
          event_name: event_name_ref,
          event_place: event_place_ref,
          proposal_type: proposal_type_ref,
          event_type: event_type_ref,
          budget: `${budget_ref}`,
          event_from_date: event_from_date_ref,
          event_to_date: event_to_date_ref,
          description: description_ref,
          images: createimg,
          food_prefs: food_prefs_ref,
          events: events_ref,
        },
      });
      setLoading(false);
      setProposalLoading(true);
      document.getElementById("modal-close-btn").click();

      getVendorProposals();
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  }
  return (
    <>
    <div className="vendor-page">
      <div className="vendor-container">
        <div className="vendor-search-create">
          <label className="vendor-proposal-head">Proposals</label>
          <div className="search-bar">
            <i
              className="fa-solid fa-magnifying-glass"
              id="vendor-search-icon"
            ></i>
            <input
              type="search"
              placeholder="Search event proposals"
              className="vendor-search"
              onChange={(e) => {
                setSearched(e.target.value);
              }}
            />
          </div>

          <button
            className="btn btn-primary"
            id="vendor-create-btn"
            onClick={() => {
              setbtnname("Add");
              resetModalContent();
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Create
          </button>
        </div>
        <div className="vendor-proposals-container">
          <div className="vendor-proposals">
            {proposalLoading ? (
              <Loader />
            ) : (
              proposals
                .filter((p) => {
                  if (p.event_name.toLowerCase().includes(search.toLowerCase()))
                    return p;
                })
                .map((proposal, index) => {
                  return (
                    <VendorProposalTile
                      key={index}
                      proposal={proposal}
                      setbtnname={setbtnname}
                      setEditProposal={setEditProposal}
                      setModalContent={setModalContent}
                    />
                  );
                })
            )}
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {`${btnname} Proposal`}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  id="modal-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={close_ref}
                ></button>
              </div>
              <div className="modal-body">
                <CreateProposal
                  setcreateimg={setcreateimg}
                  createimg={createimg}
                  event_name_ref={event_name_ref}
                  event_place_ref={event_place_ref}
                  proposal_type_ref={proposal_type_ref}
                  event_type_ref={event_type_ref}
                  budget_ref={budget_ref}
                  event_from_date_ref={event_from_date_ref}
                  event_to_date_ref={event_to_date_ref}
                  description_ref={description_ref}
                  food_prefs_ref={food_prefs_ref}
                  events_ref={events_ref}
                  editproposal={editproposal}
                  btnname={btnname}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-mdb-focus="false"
                  onClick={() => {
                    if (
                      !event_name_ref.current.value ||
                      !event_place_ref.current.value ||
                      !proposal_type_ref.current.value ||
                      !event_type_ref.current.value ||
                      !budget_ref.current.value ||
                      !event_from_date_ref.current.value ||
                      !event_to_date_ref.current.value ||
                      !description_ref.current.value ||
                      !food_prefs_ref.current.value ||
                      !events_ref.current.value||
                      !createimg.length
                    ) {
                      toastError("Enter all Fields");
                    } else {
                      setLoading(true);
                      if (btnname === "Add") {
                        createproposalindb(
                          createimg,
                          event_name_ref.current.value,
                          event_place_ref.current.value,
                          proposal_type_ref.current.value,
                          event_type_ref.current.value,
                          budget_ref.current.value,
                          event_from_date_ref.current.value,
                          event_to_date_ref.current.value,
                          description_ref.current.value,
                          food_prefs_ref.current.value,
                          events_ref.current.value
                        );
                      } else {
                        editproposalindb(
                          createimg,
                          event_name_ref.current.value,
                          event_place_ref.current.value,
                          proposal_type_ref.current.value,
                          event_type_ref.current.value,
                          budget_ref.current.value,
                          event_from_date_ref.current.value,
                          event_to_date_ref.current.value,
                          description_ref.current.value,
                          food_prefs_ref.current.value,
                          events_ref.current.value
                        );
                      }
                    }
                  }}
                >
                  {btnname} {loading ? <Loader /> : ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

export default VendorProposals;
