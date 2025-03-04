import React, { useEffect, useState } from "react";
import "../styles/BoardPage.css";
import PostModal from "../components/\bPostModal";

function BoardPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");

  // Create
  const handleCreate = () => {
    setModalMode("create");
    setSelectedPost({
      brd_title: "",
      brd_category: "",
      brd_ext1: "",
      brd_ext2: "",
      brd_content: "",
    });
    setIsModalOpen(true);
  };

  // Read
  const handleRead = (post) => {
    setModalMode("read");
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // Update
  const handleUpdate = (post) => {
    setModalMode("update");
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // Delete
  const handleDelete = (postId) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      setPosts(posts.filter((post) => post.brd_idx !== postId));
    }
  };

  // Modal 저장
  const handleSave = (postData) => {
    if (modalMode === "create") {
      const newPost = {
        ...postData,
        brd_idx: Math.max(...posts.map((p) => p.brd_idx)) + 1,
        reg_datetime: new Date().toISOString(),
      };
      setPosts([newPost, ...posts]);
    } else if (modalMode === "update") {
      setPosts(
        posts.map((post) =>
          post.brd_idx === selectedPost.brd_idx
            ? { ...post, ...postData }
            : post
        )
      );
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("/chailx.json")
      .then((response) => {
        if (!response.ok) throw new Error("네트워크 응답이 올바르지 않습니다");
        return response.json();
      })
      .then((data) => setPosts(data.list))
      .catch((error) =>
        console.error("데이터 가져오는 데 실패했습니다:", error)
      );
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <h2 className="board-title">논문 게시판</h2>
        <button className="create-button" onClick={handleCreate}>
          새 글 작성
        </button>
      </div>
      <div className="board-table-container">
        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>학술대회명</th>
              <th>논문명</th>
              <th>카테고리</th>
              <th>구분</th>
              <th>등록일</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.brd_idx}>
                <td className="center">{post.brd_idx}</td>
                <td className="center">{post.brd_ext2}</td>
                <td className="title" onClick={() => handleRead(post)}>
                  {post.brd_title}
                </td>
                <td className="center">{post.brd_category}</td>
                <td className="center">{post.brd_ext1}</td>
                <td className="center">{formatDate(post.reg_datetime)}</td>
                <td className="center actions">
                  <button onClick={() => handleUpdate(post)}>수정</button>
                  <button onClick={() => handleDelete(post.brd_idx)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <PostModal
          mode={modalMode}
          post={selectedPost}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default BoardPage;
