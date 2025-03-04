import { useState } from "react";

function PostModal({ mode, post, onSave, onClose }) {
  const [formData, setFormData] = useState(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>
          {mode === "create"
            ? "새 글 작성"
            : mode === "read"
            ? "글 보기"
            : "글 수정"}
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="brd_title"
            value={formData.brd_title}
            onChange={handleChange}
            placeholder="제목"
            readOnly={mode === "read"}
          />
          <input
            type="text"
            name="brd_category"
            value={formData.brd_category}
            onChange={handleChange}
            placeholder="카테고리"
            readOnly={mode === "read"}
          />
          <input
            type="text"
            name="brd_ext1"
            value={formData.brd_ext1}
            onChange={handleChange}
            placeholder="구분"
            readOnly={mode === "read"}
          />
          <input
            type="text"
            name="brd_ext2"
            value={formData.brd_ext2}
            onChange={handleChange}
            placeholder="발행처"
            readOnly={mode === "read"}
          />

          {mode !== "read" && <button type="submit">저장</button>}
          <button type="button" onClick={onClose}>
            닫기
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostModal;
